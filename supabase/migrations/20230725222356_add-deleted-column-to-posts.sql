alter table "public"."posts" add column "deleted" boolean not null default false;

create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable update for authenticated users only"
on "public"."posts"
as permissive
for update
to authenticated
using (true)
with check (true);



