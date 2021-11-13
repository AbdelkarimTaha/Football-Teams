using Domain.Interfaces;
using Domain.Models;
using Domain.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("register")]
        public Task<bool> Register(RegisterModel model)
        {
            return _accountService.Register(model);
        }

        [HttpPost("login")]
        public Task<LoginDTO> Login(LoginModel model)
        {
            return _accountService.Login(model);
        }
    }
}
