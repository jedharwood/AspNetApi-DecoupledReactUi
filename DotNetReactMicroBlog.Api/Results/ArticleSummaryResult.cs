using DotNetReactMicroBlog.Api.Models;

namespace DotNetReactMicroBlog.Api.Results
{
    public class ArticleSummaryResult
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public Author Author { get; set; }
    }
}

