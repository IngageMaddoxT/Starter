using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProjectTemplate.Startup))]
namespace ProjectTemplate
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
