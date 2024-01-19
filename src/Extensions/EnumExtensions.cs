using System.ComponentModel;
using System.Reflection;

namespace Reservas.Site.Extensions
{
    public static class EnumExtensions
    {
        public static string GetDescription(this Enum enumObject)
        {
            FieldInfo fieldInfo = enumObject.GetType().GetField(enumObject.ToString());


            Attribute customAttribute = fieldInfo
                    .GetCustomAttribute(typeof(DescriptionAttribute));

            return customAttribute == null ? null :
                ((DescriptionAttribute)customAttribute).Description.ToString();
        }
    }
}