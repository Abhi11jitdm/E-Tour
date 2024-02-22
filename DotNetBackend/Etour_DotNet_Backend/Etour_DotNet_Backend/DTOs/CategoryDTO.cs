namespace Etour_DotNet_Backend.DTOs
{
    public class CategoryDTO
    {
        public int CategoryId { get; set; }
        public string CategoryImagePath { get; set; }
        public string CategoryInfo { get; set; }
        public string CategoryName { get; set; }
        public List<PackageDTO> Packages { get; set; }
    }

    public class PackageDTO
    {
        public int PackageId { get; set; }
        public string PackageImagePath { get; set; }
        public string PackageInfo { get; set; }
        public string PackageName { get; set; }
    }
}
