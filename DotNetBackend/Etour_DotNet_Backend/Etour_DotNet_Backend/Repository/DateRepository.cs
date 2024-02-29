using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.Repository
{
    public class DateRepository : IDateRepository
    {
        private readonly ScottDbContext _context;

        public DateRepository(ScottDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<IEnumerable<Date>>> GetDateByPackId(int id)
        {
            var date = _context.Dates.FromSql($"select * from date where package_id = {id}");
            return date.ToList();
        }
    }
}
