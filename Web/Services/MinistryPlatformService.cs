using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Helpers;

namespace Web.Services
{
    public class MinistryPlatformService
    {
        private const string TranslationUri = "http://my.crossroads.net/translation/api/getpagerecords/{0}";

        public static string GetContact()
        {
            var httpClient = new HttpClient();
            var url = string.Format(TranslationUri, 455);

            //httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", userToken);
            var post = httpClient.GetAsync(url);
            var result = post.Result.Content.ReadAsStringAsync().Result;

            return result;
        }
    }
}