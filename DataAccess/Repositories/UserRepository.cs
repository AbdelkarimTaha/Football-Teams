using DataAccess.Data;
using Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserRepository(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }


        public async Task CreateAdminUser()
        {
            var result = await _userManager.FindByNameAsync("admin");
            if (result == null)
            {
                var user = await _userManager.CreateAsync(new IdentityUser
                {
                    UserName = "admin",
                    Email = "admin@admin.com"
                }, "admin");
                if (user.Succeeded)
                {
                    var admin = await _userManager.FindByNameAsync("admin");
                    await _userManager.AddToRoleAsync(admin, "Admin");
                }
            }
        }
    }
}
