import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  function ProfileViewDialog({ open, onOpenChange, user }) {
    if (!user) return null;
  
    const fullName = `${user.first_name || ""} ${user.middle_name || ""} ${
      user.last_name || ""
    } ${user.suffix || ""}`.trim();
  
    const idNumber =
      user?.student_number ||
      user?.employee_number ||
      "N/A";
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Profile Details</DialogTitle>
            <DialogDescription>
              View complete profile information.
            </DialogDescription>
          </DialogHeader>
  
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {user.first_name?.charAt(0)}
                  {user.last_name?.charAt(0)}
                </div>
  
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {fullName || "N/A"}
                  </h2>
  
                  <p className="text-sm text-muted-foreground">{user.email}</p>
  
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>{user.role}</Badge>
                    <Badge>{user.status}</Badge>
                    <Badge>{idNumber}</Badge>
                  </div>
                </div>
              </div>
            </div>
  
            <ProfileSection title="Basic Information">
              <ProfileItem label="ID Number" value={idNumber} />
              <ProfileItem label="Role" value={user.role} />
              <ProfileItem label="Status" value={user.status} />
              <ProfileItem label="Email" value={user.email} />
              <ProfileItem label="First Name" value={user.first_name} />
              <ProfileItem label="Middle Name" value={user.middle_name} />
              <ProfileItem label="Last Name" value={user.last_name} />
              <ProfileItem label="Suffix" value={user.suffix} />
            </ProfileSection>
  
            {user.role === "Student" && (
              <>
                <ProfileSection title="Student Information">
                  <ProfileItem label="LRN" value={user?.lrn} />
                  <ProfileItem
                    label="Student Number"
                    value={user?.student_number}
                  />
                  <ProfileItem label="Birth Date" value={user?.birth} />
                  <ProfileItem label="Gender" value={user?.gender} />
                  <ProfileItem label="Phone" value={user?.phone} />
                  <ProfileItem
                    label="Admission Date"
                    value={user?.admission_date}
                  />
                </ProfileSection>
  
                <ProfileSection title="Address">
                  <ProfileItem label="House No." value={user?.house_no} />
                  <ProfileItem label="Street" value={user?.street} />
                  <ProfileItem label="Barangay" value={user?.barangay} />
                  <ProfileItem label="City" value={user?.city} />
                  <ProfileItem label="Province" value={user?.province} />
                  <ProfileItem label="Country" value={user?.country} />
                  <ProfileItem label="Zip Code" value={user?.zip} />
                </ProfileSection>
  
                <ProfileSection title="Guardian Information">
                  <ProfileItem label="Name" value={user?.guardian_name} />
                  <ProfileItem
                    label="Relationship"
                    value={user?.guardian_relationship}
                  />
                  <ProfileItem label="Phone" value={user?.guardian_phone} />
                  <ProfileItem label="Email" value={user?.guardian_email} />
                  <ProfileItem
                    label="Address"
                    value={user?.guardian_address}
                    full
                  />
                </ProfileSection>
              </>
            )}
  
            {user.role === "Faculty" && (
              <ProfileSection title="Faculty Information">
                <ProfileItem
                  label="Employee Number"
                  value={user?.employee_number}
                />
                <ProfileItem
                  label="Department"
                  value={user?.department?.name}
                />
                <ProfileItem
                  label="Designation"
                  value={user?.designation}
                />
                <ProfileItem
                  label="Specialization"
                  value={user?.specialization}
                />
                <ProfileItem label="Phone" value={user?.phone} />
                <ProfileItem label="Hire Date" value={user?.hire_date} />
              </ProfileSection>
            )}
  
            {user.role === "Admin" && (
              <ProfileSection title="Admin Information">
                <ProfileItem
                  label="Employee Number"
                  value={user?.employee_number}
                />
                <ProfileItem label="Phone" value={user?.phone} />
              </ProfileSection>
            )}
  
            {user.role === "Registrar" && (
              <ProfileSection title="Registrar Information">
                <ProfileItem
                  label="Employee Number"
                  value={user?.employee_number}
                />
                <ProfileItem label="Phone" value={user?.phone} />
              </ProfileSection>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  
  function ProfileSection({ title, children }) {
    return (
      <section className="rounded-2xl border border-border p-4">
        <h3 className="mb-4 font-semibold text-foreground">{title}</h3>
  
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      </section>
    );
  }
  
  function ProfileItem({ label, value, full = false }) {
    return (
      <div className={full ? "sm:col-span-2" : ""}>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
  
        <p className="mt-1 text-sm font-medium text-foreground">
          {value || "N/A"}
        </p>
      </div>
    );
  }
  
  function Badge({ children }) {
    return (
      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
        {children || "N/A"}
      </span>
    );
  }
  
  export default ProfileViewDialog;