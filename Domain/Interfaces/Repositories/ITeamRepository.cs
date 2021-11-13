using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces.Repositories
{
    public interface ITeamRepository
    {
        Task<Team> GetByID(int id);
        Task<List<Team>> GetAll();
        Task<bool> Insert(Team team);
        Task<bool> Update(Team team);
        Task<bool> Delete(int id);
    }
}
