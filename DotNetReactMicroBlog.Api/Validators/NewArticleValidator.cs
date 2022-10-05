using DotNetReactMicroBlog.Api.Models;
using FluentValidation;

namespace DotNetReactMicroBlog.Api.Validators
{
    public class NewArticleValidator : AbstractValidator<Article>
    {
        public NewArticleValidator()
        {
            RuleFor(a => a.AuthorId).NotEmpty().GreaterThanOrEqualTo(1);
            RuleFor(a => a.Content).NotEmpty().MaximumLength(500);
            RuleFor(a => a.Subtitle).NotEmpty().MaximumLength(100);
            RuleFor(a => a.Title).NotEmpty().MaximumLength(100);
        }
    }
}

