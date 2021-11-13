using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces.Repositories
{
    public interface IPlayerRepository
    {
        Task<Player> GetByID(int id);
        Task<List<Player>> GetAll();
        Task<bool> Insert(Player player);
        Task<bool> Update(Player player);
        Task<bool> Delete(int id);
        Task<List<Player>> GetTeamPlayers(int teamId);
        Task DeleteTeamPlayers(int teamId);
    }
}
