using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace poc_backend.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CheckController : ControllerBase
{
    [AllowAnonymous]
    [HttpGet("hello")]
    public IActionResult AllowAnonymous() => Ok(new { message = "Hello!" });

    [HttpGet("0")]
    public IActionResult Get0() => Ok(new { message = "Hello, World! 0" });

    [HttpGet("1")]
    [Authorize(Policy = "policy1")]
    public IActionResult Get1() => Ok(new { message = "Hello, World! 1" });

    [HttpGet("2")]
    [Authorize(Policy = "policy2")]
    public IActionResult Get2() => Ok(new { message = "Hello, World! 2" });

    [HttpGet("3")]
    [Authorize(Policy = "policy3")]
    public IActionResult Get3() => Ok(new { message = "Hello, World! 3" });


    /*
    // POST: /Teste
    [HttpPost]
    public IActionResult Post([FromBody] YourModel model)
    {
        // Your code here
        return Created("", model);
    }

    // PUT: /Teste/{id}
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] YourModel model)
    {
        // Your code here
        return NoContent();
    }

    // DELETE: /Teste/{id}
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        // Your code here
        return NoContent();
    }
    */
}