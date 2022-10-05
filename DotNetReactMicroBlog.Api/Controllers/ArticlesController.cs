using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DotNetReactMicroBlog.Api.Models;
using DotNetReactMicroBlog.Api.Results;
using DotNetReactMicroBlog.Api.Repositories;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace DotNetReactMicroBlog.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly IMicroBlogRepository repository;
        private readonly IValidator<Article> requestValidator;
        private readonly ILogger<ArticlesController> _logger;

        public ArticlesController(IMicroBlogRepository repository, IValidator<Article> requestValidator, ILogger<ArticlesController> logger)
        {
            this.repository = repository;
            this.requestValidator = requestValidator;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var articleResults = await repository.getAllArticles();
            var articleSummaryResults = new List<ArticleSummaryResult>();

            foreach (var article in articleResults)
            {
                articleSummaryResults.Add(new ArticleSummaryResult
                {
                    Id = article.ArticleId,
                    Title = article.Title,
                    Subtitle = article.Subtitle,
                    Author = article.Author
                });
            }

            return articleSummaryResults.Count < 1 ? NotFound() : Ok(articleSummaryResults);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var article = await repository.getArticleById(id);

            return article == null ? NotFound() : Ok(article);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Article article)
        {
            var validationResult = requestValidator.Validate(article);
            if (!validationResult.IsValid)
            {
                var validationMessages = GetErrorStrings(validationResult);
                LogValidationMessages(validationMessages);
                return BadRequest(validationMessages);
            }

            article.Created = DateTime.Now;

            var addArticleSucceeded = await repository.addArticle(article);

            if (addArticleSucceeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        private List<string> GetErrorStrings(ValidationResult validationResult)
        {
            var errorMessages = new List<string>();

            foreach (var error in validationResult.Errors)
            {
                errorMessages.Add(error.ErrorMessage);
            }

            return errorMessages;
        }

        private void LogValidationMessages(List<string> validationMessages)
        {
            var validationMessage = String.Join(" ", validationMessages);
            _logger.LogWarning("Request failed validation. " + validationMessage);
        }
    }
}