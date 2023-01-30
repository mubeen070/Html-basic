
public class Admin {
    private List<DressTemplate> dressTemplates;

    public Admin() {
        dressTemplates = new ArrayList<>();
    }

    public void manageDressTemplates(DressTemplate dressTemplate) {
        dressTemplates.add(dressTemplate);
    }

    public void addDesignsToTemplate(DressTemplate dressTemplate, List<String> designs) {
        dressTemplate.setDesigns(designs);
    }

    public void addLabelsToTemplate(DressTemplate dressTemplate, List<String> labels) {
        dressTemplate.setLabels(labels);
    }

    public void manageUsers(User user) {
        user.setRole(UserRole.ADMIN);
    }
}

public class Guest {
    private String firstName;
    private String lastName;
    private Map<String, String> sizes;

    public Guest() {
        sizes = new HashMap<>();
    }

    public void registerAsClient() {
        setRole(UserRole.CLIENT);
    }

    public void completeProfile(String firstName, String lastName, Map<String, String> sizes) {
        setFirstName(firstName);
        setLastName(lastName);
        setSizes(sizes);
    }

    public void placeOrder(DressTemplate dressTemplate) {
        // Place order logic here
    }

    public void receiveOrderStatusAlert() {
        // Receive alert logic here
    }

    public void registerAsTailor() {
        setRole(UserRole.TAILOR);
    }
}

public class Tailor {
    private String businessLocation;
    private Map<DressTemplate, Double> rates;

    public Tailor() {
        rates = new HashMap<>();
    }

    public void specifyBusinessLocation(String businessLocation) {
        setBusinessLocation(businessLocation);
    }

    public void specifyRates(DressTemplate dressTemplate, double rate) {
        rates.put(dressTemplate, rate);
    }

    public void manageOrderStatus() {
        // Manage order status logic here
    }

    public void sendOrderReadyAlert() {
        // Send alert logic here
    }
}

public class DressTemplate {
    private String name;
    private List<String> designs;
    private List<String> labels;

    public DressTemplate(String name) {
        this.name = name;
        designs = new ArrayList<>();
        labels = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public List<String> getDesigns() {
        return designs;
    }

    public void setDesigns(List<String> designs) {
        this.designs = designs;
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }
}

public class User {
    private String firstName;
    private String lastName;
    private UserRole role;

    public UserRole
