using DotNetReactMicroBlog.Api.Models;
using System.Collections.Generic;
using DotNetReactMicroBlog.Api.Services;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System;

namespace DotNetReactMicroBlog.Api.Repositories
{
    public class MicroBlogRepository : IMicroBlogRepository
    {
        private readonly MicroBlogContext _context;
        private readonly ILogger<MicroBlogRepository> _logger;

        public MicroBlogRepository(MicroBlogContext context, ILogger<MicroBlogRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<Article>> getAllArticles()
        {
            var queryArticles = Task.Run(() => _context.Articles.Include(a => a.Author).ToList());
            IEnumerable<Article> result = await queryArticles;

            return result;
        }

        public async Task<Article> getArticleById(int id)
        {
            var queryArticle = Task.Run(() => _context.Articles.Include(a => a.Author).SingleOrDefault(b => b.ArticleId == id));
            Article result = await queryArticle;

            return result;
        }

        public async Task<bool> addArticle(Article article)
        {
            try
            {
                await Task.Run(() => _context.Articles.Add(article));
                await _context.SaveChangesAsync();

                return true;
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "An exception occured while inserting article into the database.");
                return false;
            }
        }
    }
}

