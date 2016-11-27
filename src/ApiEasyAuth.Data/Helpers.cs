using ApiEasyAuth.Data;
using System;

namespace ApiEasyAuth.Data
{
    public enum ActionType
    {
        Add = 1,
        Update = 2,
        Delete = 3
    };

    public class Helpers
    {
        public void ActualizarCamposLogs<T>(T Model, ActionType Action, string User) where T : ILog
        {
            switch (Action)
            {
                case ActionType.Add:
                    Model.UserAdd = User;
                    Model.DateAdd = DateTime.Now;
                    break;
                case ActionType.Update:
                    Model.UserUpd = User;
                    Model.DateUpd = DateTime.Now;
                    break;
                case ActionType.Delete:
                    Model.UserUpd = User;
                    Model.DateUpd = DateTime.Now;
                    break;
                default:
                    break;
            }
        }

    }
}
