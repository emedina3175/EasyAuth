using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using ApiEasyAuth.Data;

namespace ApiEasyAuth.Controllers
{
    [RoutePrefix("api/validations")]
    public class ValidationsController : ApiController
    {
        private DataManager db = new DataManager();
        
        /// <summary>
        /// Validate if the user is available
        /// </summary>
        /// <param name="username">User to validate</param>
        /// <returns>True is available</returns>
        [Route("validate-user/{username}/available")]
        [HttpGet]
        [System.Web.Mvc.OutputCache(NoStore = true, Duration = 0, Location = System.Web.UI.OutputCacheLocation.Any)]
        public async Task<IHttpActionResult> ValidateUser(string username)
        {
            try
            {
                var user = await db.Users.GetAsync(c => c.UserName == username);

                return Json(new { Valid = (user.SingleOrDefault() == null) ? true : false });
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        /// <summary>
        /// Validate if the email is available
        /// </summary>
        /// <param name="email">Email to validate</param>
        /// <returns>True is available</returns>
        [Route("validate-email/{email}/validate")]
        [HttpGet]
        [System.Web.Mvc.OutputCache(NoStore = true, Duration = 0, Location = System.Web.UI.OutputCacheLocation.Any)]
        public async Task<IHttpActionResult> ValidateEmail(string email)
        {
            var user = await db.Users.GetAsync(c => c.Email == email);

            return Json(new { Valid = (user.SingleOrDefault() == null) ? true : false });
        }
    }
}
