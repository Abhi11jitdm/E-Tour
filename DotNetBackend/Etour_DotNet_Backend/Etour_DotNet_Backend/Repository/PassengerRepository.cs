using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public class PassengerRepository : IPassengerRepository
    {
        private readonly ScottDbContext _context;

        public PassengerRepository(ScottDbContext context)
        {
            _context = context;
        }

        public  void CreatePassenger(Passenger passenger)
        {
            Console.WriteLine(passenger.PaxBirthdate);
            _context.Passengers.Add(passenger);
             _context.SaveChanges();
        }
    }
}