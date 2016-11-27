using System;

namespace ApiEasyAuth.Data
{
    public interface ILog
    {
        string UserAdd { get; set; }
        DateTime DateAdd { get; set; }
        string UserUpd { get; set; }
        Nullable<DateTime> DateUpd { get; set; }
    }
}
