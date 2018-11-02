using System.Collections.Generic;
using Blog.Domain;

namespace Blog.Service.Services.Interface
{
    public interface IPostService
    {
        List<Post> GetPosts(int count);
    }
}