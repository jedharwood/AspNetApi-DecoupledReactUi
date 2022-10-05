using DotNetReactMicroBlog.Api.Models;
using DotNetReactMicroBlog.Api.Controllers;
using DotNetReactMicroBlog.Api.Repositories;
using System.Collections.Generic;
using Xunit;
using AutoFixture;
using Moq;
using Microsoft.AspNetCore.Mvc;
using FluentValidation;
using FluentValidation.Results;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace DotNetReactMicroBlog.Api.UnitTests.Controllers
{
    public class ArticlesControllerUnitTests
    {
        private readonly Fixture fixture;
        private readonly Mock<IMicroBlogRepository> repository;
        private readonly Mock<IValidator<Article>> requestValidator;
        private readonly Mock<ILogger<ArticlesController>> logger;
        private readonly ArticlesController sut;

        public ArticlesControllerUnitTests()
        {
            fixture = new Fixture();
            repository = new Mock<IMicroBlogRepository>();
            requestValidator = new Mock<IValidator<Article>>();
            logger = new Mock<ILogger<ArticlesController>>();
            sut = new ArticlesController(repository.Object, requestValidator.Object, logger.Object); 
        }

        [Fact]
        public async Task Get_ShouldReturnNotFound_IfDbReturnsNoArticles()
        {
            // Arrange
            repository.Setup(r => r.getAllArticles()).ReturnsAsync(new List<Article>());

            // Act
            var result = await sut.Get() as NotFoundResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Get_ShouldReturnOkResult_IfDbReturnsArticles()
        {
            // Arrange
            var articles = new List<Article> { fixture.Create<Article>() };
            repository.Setup(r => r.getAllArticles()).ReturnsAsync(articles);

            // Act
            var result = await sut.Get() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task GetById_ShouldReturnNotFound_IfDbReturnsNoArticle()
        {
            // Arrange
            var articleId = fixture.Create<int>();
            repository.Setup(r => r.getArticleById(articleId)).ReturnsAsync((Article)null);

            // Act
            var result = await sut.Get(articleId) as NotFoundResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetById_ShouldReturnOkResult_IfDbReturnsArticle()
        {
            // Arrange
            var articleId = fixture.Create<int>();
            var article = fixture.Build<Article>().With(a => a.ArticleId, articleId).Create();
            repository.Setup(r => r.getArticleById(articleId)).ReturnsAsync(article);

            // Act
            var result = await sut.Get(articleId) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
            Assert.Equal(article, result.Value);
        }

        [Fact]
        public async Task Post_ShouldReturnBadRequestResult_IfValidationFails()
        {
            // Arrange
            var request = fixture.Create<Article>();

            const string validationErrorString = "property x is invalid";
            var invalidResult = new ValidationResult(new[] { new ValidationFailure("x", validationErrorString) });
            requestValidator.Setup(a =>
                    a.Validate(request))
                .Returns(invalidResult);

            repository.Setup(r => r.addArticle(request)).ReturnsAsync(true);

            var expected = new List<string> { validationErrorString };

            // Act
            var result = await sut.Post(request) as BadRequestObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal(expected, result.Value);
        }

        [Fact]
        public async Task Post_ShouldReturnMultipleValidationResults_IfValidationFails()
        {
            // Arrange
            var request = fixture.Create<Article>();

            const string validationErrorStringX = "property x is invalid";
            const string validationErrorStringY = "property y is invalid";
            var invalidResult = new ValidationResult(new[] { new ValidationFailure("x", validationErrorStringX), new ValidationFailure("x", validationErrorStringY) });
            requestValidator.Setup(a =>
                    a.Validate(request))
                .Returns(invalidResult);

            repository.Setup(r => r.addArticle(request)).ReturnsAsync(true);

            var expected = new List<string> { validationErrorStringX, validationErrorStringY };

            // Act
            var result = await sut.Post(request) as BadRequestObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal(expected, result.Value);
        }

        [Fact]
        public async Task Post_ShouldReturnBadRequestResult_IfDbInsertUnsuccessful()
        {
            // Arrange
            var request = fixture.Create<Article>();
            requestValidator.Setup(a => a.Validate(request)).Returns(new ValidationResult());
            repository.Setup(r => r.addArticle(request)).ReturnsAsync(false);

            // Act
            var result = await sut.Post(request) as BadRequestResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public async Task Post_ShouldReturnOkResult_IfDbInsertSuccessful()
        {
            // Arrange
            var request = fixture.Create<Article>();
            requestValidator.Setup(a => a.Validate(request)).Returns(new ValidationResult());
            repository.Setup(r => r.addArticle(request)).ReturnsAsync(true);

            // Act
            var result = await sut.Post(request) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }
    }
}

