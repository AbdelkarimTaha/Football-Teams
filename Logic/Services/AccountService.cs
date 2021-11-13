using DataAccess.Data;
using Domain.Interfaces;
using Domain.Models;
using Domain.Models.DTO;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public class AccountService : IAccountService
    {
        private readonly ApplicationDbContext _context;
        private readonly ITokenService _tokenService;
        private readonly IRoleRepository _roleRepository;
        private readonly IUserRepository _userRepository;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public AccountService(ApplicationDbContext context, ITokenService tokenService, IRoleRepository roleRepository,
            IUserRepository userRepository, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _context = context;
            _tokenService = tokenService;
            _roleRepository = roleRepository;
            _userRepository = userRepository;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<LoginDTO> Login(LoginModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, isPersistent: false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                return new LoginDTO()
                {
                    Username = model.Username,
                    Token = _tokenService.CreateToken(model)
                };
            }
            else
            {
                return null;
            }
        }

        public async Task<bool> Register(RegisterModel model)
        {
            await _roleRepository.AddRoles();
            await _userRepository.CreateAdminUser();

            var newUser = new IdentityUser { UserName = model.Username, Email = model.Email };
            var result = await _userManager.CreateAsync(newUser, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(newUser, "User");
                return true;
            }
            return false;
        }
    }
}
