using Etour_DotNet_Backend.DbRepos;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Repository
{
    public interface IIternaryRepository
    {
        Task<ActionResult<IEnumerable<Iternary>>> GetIternaryByPackId(int id);
    }
}
