public class AccountUtils {

    public static List<Account> accountsByState(String state) {
        List<Account> contas = new List<Account>([SELECT ID, Name FROM Account where BillingState = :state]);
        
        return contas;
    }
}