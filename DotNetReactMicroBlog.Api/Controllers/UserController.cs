using DotNetReactMicroBlog.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]/authenticate")]
public class UserController : ControllerBase
{
    private readonly IJwtManagerRepository jwtManagerRepository;

    public UserController(IJwtManagerRepository jwtManagerRepository)
    {
        this.jwtManagerRepository = jwtManagerRepository;
    }

    [HttpPost]
    public IActionResult Authenticate(User userRequest)
    {
        var token = jwtManagerRepository.Authenticate(userRequest);

        return token == null ? Unauthorized() : Ok(token);
    }
}