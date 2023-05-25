import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB } from "../types";


export class AccountsDatabase extends BaseDatabase {

    public static TABLE_NAME = "accounts"

    public async findAccounts():Promise<TAccountDB[]> {

        const accountsDB: TAccountDB[] = await BaseDatabase.connection(AccountsDatabase.TABLE_NAME)

        return accountsDB
    }

    public async findAccountsById(id:string):Promise<TAccountDB> {

        const [ accountDB ]: TAccountDB[] = await BaseDatabase.connection(AccountsDatabase.TABLE_NAME).where({ id })

        return accountDB
    }

    public async createNewAccounts(id:string):Promise<TAccountDB> {

        const [ accountDBExists ]: TAccountDB[] = await BaseDatabase.connection(AccountsDatabase.TABLE_NAME).where({ id })

        return accountDBExists
    }

    public async updateAccounts(id:string):Promise<TAccountDB> {

        const [ accountDB ]: TAccountDB[] = await BaseDatabase.connection(AccountsDatabase.TABLE_NAME).where({ id })

        return accountDB
    }

}