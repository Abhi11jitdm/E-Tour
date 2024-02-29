using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public interface IDateRepository
    {
        Task<ActionResult<IEnumerable<Date>>> GetDateByPackId(int id);
    }
}
