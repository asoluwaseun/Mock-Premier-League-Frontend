import BaseService from './BaseService';

export default class TeamsService extends BaseService{

    static viewTeams(payload){
        return this.get('/teams', payload);
    }

    static viewTeam(payload){
        return this.get(`/team/${payload.team_id}`, payload);
    }

    static createTeam(payload){
        return this.upload('post','/team', payload);
    }

    static updateTeam(payload){
        return this.upload('put',`/team/${payload.team_id}`,payload);
    }

    static deleteTeam(payload){
        return this.delete(`/team/${payload.team_id}`);
    }

    static viewStadia(){
        return this.get('/teams/stadia');
    }

    static createStadium(payload){
       return this.upload("post","/team/stadia", payload);
    }

    static deleteStadium(payload){
        return this.delete(`/teams/stadia/${payload.stadium_id}`);
    }
}