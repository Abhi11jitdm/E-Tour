using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Etour_DotNet_Backend.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet("{emailid}/{password}")]
        public Customer GetUserByEmailIdAndPass(string emailid, string password)
        {
            return _customerRepository.GetUserByEmailIdAndPass(emailid, password);
        }

        [HttpPost]

        public void CreateCustomer(Customer customer)
        {
            _customerRepository.CreateCustomer(customer);

        }
    }
}