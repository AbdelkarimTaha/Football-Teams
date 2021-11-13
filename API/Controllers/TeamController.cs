using Domain.Entities;
using Domain.Interfaces;
using Domain.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        private readonly ITeamService _teamService;

        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }


        [HttpGet("GetTeams")]
        public async Task<List<Team>> GetTeams()
        {
            return await _teamService.GetAll();
        }


        [HttpPost("InsertTeam")]
        public async Task<bool> InsertTeam(Team model)
        {
            return await _teamService.Insert(model);
        }

        [HttpPost("UpdateTeam")]
        public async Task<bool> UpdateTeam(Team model)
        {
            return await _teamService.Update(model);
        }

        [HttpPost("DeleteTeam")]
        public async Task<bool> DeleteTeam([FromBody]int id)
        {
            return await _teamService.Delete(id);
        }

        [HttpPost("GetTeam")]
        public async Task<Team> GetTeam([FromBody]int id)
        {
            return await _teamService.GetByID(id);
        }
    }
}
