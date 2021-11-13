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
    public class TeamRepository : ITeamRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public TeamRepository(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<bool> Delete(int id)
        {
            var result = _dbContext.Teams.Remove(new Team { Id = id });
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<Team>> GetAll()
        {
            return await _dbContext.Teams.ToListAsync();
        }

        public async Task<Team> GetByID(int id)
        {
            return await _dbContext.Teams.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> Insert(Team team)
        {
            var result = await _dbContext.Teams.AddAsync(team);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Update(Team team)
        {
            var result = _dbContext.Teams.Update(team);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
