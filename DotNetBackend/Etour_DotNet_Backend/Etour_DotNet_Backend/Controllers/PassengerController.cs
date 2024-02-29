using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace Etour_DotNet_Backend.Controllers
{
    [Route("api/passenger")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        private readonly IPassengerRepository _repository;

        public PassengerController(IPassengerRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public  void CreatePassenger([FromBody]Passenger passenger)
        {
            //Console.WriteLine(passenger.PaxBirthdate);
            _repository.CreatePassenger(passenger);
        }
    }
}
