import BaseService from './BaseService';

export default class FixturesService extends BaseService{

    static viewFixtures(payload){
        return this.get('/fixtures', payload);
    }

    static viewTeamFixture(payload){
        return this.get(`/fixture/team/${payload.team_id}`, payload);
    }

    static viewFixture(payload){
        return this.get(`/fixture/${payload.fixture_id}`);
    }

    static createFixture(payload){
        return this.post('/fixture', payload);
    }

    static updateFixture(payload){
        return this.put('/fixture',payload);
    }

    static deleteFixture(payload){
        return this.delete(`/fixture/${payload.fixture_id}`);
    }
}