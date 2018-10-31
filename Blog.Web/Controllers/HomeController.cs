using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Blog.Service;
using Blog.Service.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using Blog.Web.Models;
using Blog.Web.ViewModels;

namespace Blog.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPostService _postService;

        public HomeController(IPostService postService)
        {
            _postService = postService;
        }

        public IActionResult Index()
        {
            return View(new MainPageViewModel
            {
                Posts = _postService.GetPosts(5),
            });
        }
    }
}
