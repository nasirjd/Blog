using System;
using System.Collections.Generic;
using Blog.Domain;
using Blog.Service.Services.Interface;

namespace Blog.Service.Services.MockServices
{
    public class MockPostService : IPostService
    {
        private const int AllText = 0;

        public List<Post> GetPosts(int count)
        {
            var posts = new List<Post>();
            for (int i = 0; i < count; i++)
            {
                posts.Add(GetSamplePost());
            }

            return posts;
        }

        private Post GetSamplePost()
        {
            return new Post
            {
                Body = GetSampleText(AllText),
                Title = GetSampleText(30),
                ImageUrl = "https://cdn-images-1.medium.com/max/1600/0*OqqCb1Pki8hgv8VE.jpg",
                Id = new Random().Next(1,100)
            };
        }


        private string GetSampleText(int substringNumner)
        {
            

            var sampleText =
                @"    Another common display value is none. Some specialized elements such as script use this as their default. It is
            commonly used with JavaScript to hide and show elements without really deleting and recreating them.

                This is different from visibility.Setting display to none will render the page as though the element does not exist.
                visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully
            visible.


                other display values
                There are plenty of more exotic display values, such as list - item and table. Here is an exhaustive list.We'll discuss
            inline - block and flex later on.


                extra credit
            As I mentioned every element has a default display type. However, you can always override this! Though it wouldn't

        make sense to make an inline div, you can use this to customize the display of elements that have particular semantics.

            A common example is making inline li elements for horizontal menus.";

            return substringNumner == AllText ? sampleText : sampleText.Substring(0, substringNumner);
        }
    }
}
