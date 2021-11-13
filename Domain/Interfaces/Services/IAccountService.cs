using Domain.Models;
using Domain.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IAccountService
    {
        Task<LoginDTO> Login(LoginModel model);
        Task<bool> Register(RegisterModel model);
    }
}
