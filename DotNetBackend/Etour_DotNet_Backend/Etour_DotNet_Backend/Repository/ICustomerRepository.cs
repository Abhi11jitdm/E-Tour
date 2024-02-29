using Etour_DotNet_Backend.DbRepos;

namespace Etour_DotNet_Backend.Repository
{
    public interface ICustomerRepository
    {
        public Customer GetUserByEmailIdAndPass(string emailId, string password);
    }
}
