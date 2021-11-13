using DataAccess.Data;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public PlayerRepository(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<bool> Delete(int id)
        {
            var result = _dbContext.Players.Remove(new Player { Id = id });
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task DeleteTeamPlayers(int teamId)
        {
            var players = await GetTeamPlayers(teamId);
            _dbContext.Players.RemoveRange(players);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<Player>> GetAll()
        {
            return await _dbContext.Players.ToListAsync();
        }

        public async Task<Player> GetByID(int id)
        {
            return await _dbContext.Players.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Player>> GetTeamPlayers(int teamId)
        {
            return await _dbContext.Players.Where(x => x.TeamId == teamId).ToListAsync();

        }

        public async Task<bool> Insert(Player player)
        {
            player.Id = 0;
            var result = await _dbContext.Players.AddAsync(player);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Update(Player player)
        {
            var result = _dbContext.Players.Update(player);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
