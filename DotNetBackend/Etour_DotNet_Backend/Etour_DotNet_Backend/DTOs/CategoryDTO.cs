//namespace Etour_DotNet_Backend.DTOs
//{
//    public class CategoryDTO
//    {
//        public int CategoryId { get; set; }
//        public string CategoryImagePath { get; set; }
//        public string CategoryInfo { get; set; }
//        public string CategoryName { get; set; }
//        public List<PackageDTO> Packages { get; set; }
//    }

//    public class SubCategoryDTO
//    {

//    }

//    public class PackageDTO
//    {
//        public int PackageId { get; set; }
//        public string PackageImagePath { get; set; }
//        public string PackageInfo { get; set; }
//        public string PackageName { get; set; }
//    }
//}

namespace Etour_DotNet_Backend.DTOs
{
    public class CategoryDTO
    {
        public int CategoryId { get; set; }
        public string CategoryImagePath { get; set; }
        public string CategoryInfo { get; set; }
        public string CategoryName { get; set; }
        public List<SubCategoryDTO> SubCategories { get; set; }
    }

    public class SubCategoryDTO
    {
        public int SubcategoryId { get; set; }
        public string SubcategoryImgagePath { get; set; }
        public string SubcategoryInfo { get; set; }
        public string SubcategoryName { get; set; }
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
