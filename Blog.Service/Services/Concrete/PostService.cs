using System.Collections.Generic;
using Blog.Domain;
using Blog.Service.Services.Interface;

namespace Blog.Service.Services.Concrete
{
    public class PostService : IPostService
    {
        public List<Post> GetPosts(int count)
        {
            throw new System.NotImplementedException();
        }
    }
}
