using Etour_DotNet_Backend.DbRepos;

namespace Etour_DotNet_Backend.Repository
{
    public interface ICostRepository
    {
        Cost GetCostByPackageId(int id);
    }
}
