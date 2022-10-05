using Microsoft.AspNetCore.Mvc;

namespace DotNetReactMicroBlog.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KeepAliveController : ControllerBase
    {
        // GET: /<controller>/
        public string index()
        {
            return "I'm alive.";
        }
    }
}

