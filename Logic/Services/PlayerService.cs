using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IPlayerRepository _playerRepository;

        public PlayerService(IPlayerRepository playerRepository)
        {
            _playerRepository = playerRepository;
        }
        public async Task<bool> Delete(int id)
        {
            return await _playerRepository.Delete(id);
        }

        public async Task<List<Player>> GetAll()
        {
            return await _playerRepository.GetAll();
        }

        public async Task<Player> GetByID(int id)
        {
            return await _playerRepository.GetByID(id);
        }

        public async Task<bool> Insert(Player player)
        {
            return await _playerRepository.Insert(player);
        }

        public async Task<bool> Update(Player player)
        {
            return await _playerRepository.Update(player);
        }
    }
}
