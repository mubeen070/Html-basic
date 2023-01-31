
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

"Automated Attendance System is a location aware application with both mobile and web user interfaces. On the class schedule time when the class students located in the 10-meter radius of the class location, his attendance is automatically marked. On Class last 5th minute, Mobile app alert the teacher to ensure class attendance by class count and mark the absent student manually. Teacher provides the lecture title and finalize lecture attendance. Teacher can set his classes and their schedules in the app, while students simply subscribe/unsubscribe to the teacher class. Moreover, if the teacher is absent till the first 15 minutes the app automatically informs the DOO office to take appropriate action.
1. Identify the Primary Actors, theirs goals and then draw its Use Case diagram.
2. Select one use case from the UC diagram and write only the "Main Success Scenario" and "Extension (Exception with Alternative Course of Events)" sections of the fully dressed use case.
3. For the main success scenario draw its System Sequence Diagram and design the interaction diagram for two system events using GRASP principles only.
4. Draw the Class Diagram from the interaction diagrams and then write the code.

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
