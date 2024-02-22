
using Etour_DotNet_Backend.DbRepos;
using Etour_DotNet_Backend.Repository;
using Microsoft.EntityFrameworkCore;
using System;

namespace Etour_DotNet_Backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddTransient<IPackageRepository, PackageRepository>();
            builder.Services.AddTransient<ICategoryRepository, CategoryRepository>();
            builder.Services.AddDbContext<ScottDbContext>(options => options.UseMySQL(builder.Configuration.GetConnectionString("EtourDbConnection")));


            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyAllowSpecificOrigins",
                                  builder =>
                                  {
                                      builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                                  });
            });

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("MyAllowSpecificOrigins");
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}