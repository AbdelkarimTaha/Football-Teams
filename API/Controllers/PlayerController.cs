using Domain.Entities;
using Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IPlayerService _playerService;

        public PlayerController(IPlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet("GetPlayers")]
        public async Task<List<Player>> GetPlayers()
        {
            return await _playerService.GetAll();
        }


        [HttpPost("InsertPlayer")]
        public async Task<bool> InsertPlayer([FromBody]Player model)
        {
            return await _playerService.Insert(model);
        }

        [HttpPost("UpdatePlayer")]
        public async Task<bool> UpdatePlayer(Player model)
        {
            return await _playerService.Update(model);
        }

        [HttpPost("DeletePlayer")]
        public async Task<bool> DeletePlayer([FromBody] int id)
        {
            return await _playerService.Delete(id);
        }

        [HttpPost("GetPlayer")]
        public async Task<Player> GetPlayer([FromBody] int id)
        {
            return await _playerService.GetByID(id);
        }
    }
}
