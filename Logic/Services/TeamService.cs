using AutoMapper;
using DataAccess.Data;
using Domain.Entities;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;
using Domain.Models.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _teamRepository;
        private readonly IPlayerRepository _playerRepository;

        public TeamService(ITeamRepository teamRepository, IPlayerRepository playerRepository)
        {
            _teamRepository = teamRepository;
            _playerRepository = playerRepository;
        }
        public async Task<bool> Delete(int id)
        {
            var result = await _teamRepository.Delete(id);
            if (result)
            {
                await _playerRepository.DeleteTeamPlayers(id);
                return true;
            }
            return false;
        }

        public async Task<List<Team>> GetAll()
        {
            return await _teamRepository.GetAll();
        }

        public async Task<Team> GetByID(int id)
        {
            var team = await _teamRepository.GetByID(id);
            team.Players = await _playerRepository.GetTeamPlayers(id);
            team.Players.ForEach(x => x.Team = null);
            return team;
        }

        public async Task<bool> Insert(Team team)
        {
            try
            {
                var result = await _teamRepository.Insert(team);
                return (result) ? true : false;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public Task<bool> Update(Team team)
        {
            return _teamRepository.Update(team);
        }
    }
}
