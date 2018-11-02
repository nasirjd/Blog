using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Blog.Web.TagHelpers
{
    public class PostTagHelper : TagHelper
    {
        public PostTagHelper()
        {

        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            throw new Exception(Name);
        }

        public string Name { get; set; }
    }
}
