using Etour_DotNet_Backend.DbRepos;
using Microsoft.EntityFrameworkCore;

namespace Etour_DotNet_Backend.Repository
{
    public class CustomerRepository:ICustomerRepository
    {
        private readonly ScottDbContext _context;

        public CustomerRepository(ScottDbContext context)
        {
            _context = context;
        }

        public void CreateCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();
        }

        public Customer GetUserByEmailIdAndPass(string emailId, string password)
        {
            return _context.Customers
                .FromSql($"SELECT * FROM customers WHERE email = {emailId} AND password = {password}")
                .FirstOrDefault();
        }
    }
}