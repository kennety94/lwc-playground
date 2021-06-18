public class AccountTriggerHandler {

    public static void CreateAccounts(List<Account> contas) {
        List<Account> contasInserir = new List<Account>();
        for(Account a : contas){
            a.ShippingState = a.BillingState;
            contasInserir.add(a);
        }
        
        if(contasInserir.size() > 0){
            insert contasInserir;
        }
    }
    
}