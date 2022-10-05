using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetReactMicroBlog.Api.Models;

namespace DotNetReactMicroBlog.Api.Repositories
{
    public interface IMicroBlogRepository
    {
        Task<IEnumerable<Article>> getAllArticles();
        Task<Article> getArticleById(int id);
        Task<bool> addArticle(Article article);
    }
}

