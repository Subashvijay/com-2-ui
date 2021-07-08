using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using com2Auth.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace com2Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IConfiguration _config;
        public AuthController(IConfiguration configuration)
        {
          _config = configuration;
        }
        [HttpPost]
        [Route("log")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if(string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Invalid Request");
            }
            UserDetails user = new UserDetails()
            {
                FirstName = "subash",
                LastName = "Bose",
                Email="subash@h"
            };

            if (loginModel.Email=="ww")
            {
                var tokenString = GenerateJSONWebToken(user);
                return Ok(new { token = tokenString });

            }
            
            return Ok(user);
        }
        private string GenerateJSONWebToken(UserDetails userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claimsData = new[]
            {
            new Claim("UseName","subash")
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims: claimsData,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
