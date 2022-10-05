namespace DotNetReactMicroBlog.Api.Repositories
{
    public interface IJwtManagerRepository
    {
        Tokens Authenticate(User user);
    }
}

